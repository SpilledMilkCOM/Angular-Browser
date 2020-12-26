import { AfterViewInit, Component } from '@angular/core';

import { CompressMapperService } from 'src/app-mappers/app-compress-mapper-service';
import { MapperItem } from 'src/app-mappers/app-mapper-item';
import { MultiMapperService } from 'src/app-mappers/app-multi-mapper-service';
import { ShoutMapperService } from 'src/app-mappers/app-shout-mapper-service';
import { VowelMapperService } from 'src/app-mappers/app-vowel-mapper-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CompressMapperService, MultiMapperService, ShoutMapperService, VowelMapperService]
})
export class AppComponent implements AfterViewInit {

  public mapCompress = false;
  public mapLeet = false;
  public mapShout = false;
  public mapVowels = false;

  public mapped = 'init default';
  public message = 'init default';
  public title = 'Angular-Browser';

  private COMPRESS_KEY = 'compress';
  private SHOUT_KEY = 'shout';
  private VOWELS_KEY = 'vowels';

  constructor(
    private mapper: MultiMapperService,
    private compressMapper: CompressMapperService,
    private shoutMapper: ShoutMapperService,
    private vowelsMapper: VowelMapperService
  ) {

    // Set up the multi-mapper here.
    // TODO: Inject all of the mappers into the MultiMapperService (but IS it a component?)

    this.mapper.add(this.COMPRESS_KEY, new MapperItem(compressMapper) );
    this.mapper.add(this.SHOUT_KEY, new MapperItem(shoutMapper) );
    this.mapper.add(this.VOWELS_KEY, new MapperItem(vowelsMapper) );
  }

  public clickCompress(checked: boolean) {
    // This member is not getting set in this class, so it needs to be set here.

    this.mapCompress = checked;

    this.mapper.enable(this.COMPRESS_KEY, checked);

    this.mapMessage(this.message);
  }

  public clickLeet(checked: boolean) {
    // This member is not getting set in this class, so it needs to be set here.

    this.mapLeet = checked;

    this.mapMessage(this.message);
  }

  public clickShout(checked: boolean) {
    // This member is not getting set in this class, so it needs to be set here.

    this.mapShout = checked;

    this.mapper.enable(this.SHOUT_KEY, checked);

    this.mapMessage(this.message);
  }
  
  public clickVowels(checked: boolean) {
    // This member is not getting set in this class, so it needs to be set here.

    this.mapVowels = checked;

    this.mapper.enable(this.VOWELS_KEY, checked);

    this.mapMessage(this.message);
  }

  public mapMessage(message: string) {

    var value = message;

    // Need to do all of the mapping here based on the mapper / translator.

    if (this.mapShout) {
      value = this.mapper.map(value);
    }

    this.mapped = value;
  }

  ngAfterViewInit(): void {
  }

  public onKeyUp(event: any) {

    // This member is not getting set in this class, so it needs to be set here.

    this.message = event.target.value;

    // This needs to be "key up" otherwise the value of target will be the one BEFORE versus what it is AFTER the key is pressed.

    this.mapMessage(this.message);
  }
}