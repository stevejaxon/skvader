import {createHash} from "crypto";
import React, {Component} from "react";

/**
 * Original Ascii art by Art by Praseodymium 59: http://ascii.co.uk/art/portal
 */
export class IntroBackgroundDoor extends Component{
    private readonly asciiBackgroundRestaurant: string[] = [
        "\n\n._       6&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&A       _\n" +
        "  ~-._ 6&&&&&&&&&&&& `  ~    ~~     - &&&&&&&&&&&&&A _.-~ \n" +
        "      &&&&&&&&&&& .        `.   .        &&&&&&&&&&&&     \n" +
        "      && $ --            ---      `.'  --       $ &&      \n" +
        "      &&$        . ====================    '     $&&      \n" +
        "      && $  `     // '  '    ;   '  . \\\\        $ &&    \n" +
        "~~..__&&$  .~~   //  .  `    `   |  `  \\\\  *    $&&__..~\n" +
        "      && $      //   .  '    ;   `  .   \\\\      $ &&    \n" +
        "      &&$       ||   |  |   ___  '  :   ||    '  $&&      \n" +
        "      && $   '  ||   `  ;   ) (  ;  .   || .    $ &&      \n" +
        "      &&$   '   ||   '  ,  (###) `  ;   ||   ~~  $&&      \n" +
        "      && $     (||   |  '   ---  |  !   ||  .   $ &&      \n" +
        "_____.&&$ . _ .(||   `  `  (###) '  |   ||   .   $&&._____\n" +
        "      && $      ||   |  ;   ) (  ,  ;   ||      $ &&      \n" +
        "      &&$   `   ||   :  :   ---  .  _   ||       $&&      \n" +
        "      && $     .||   ;  |    ;   ; (_)  || ~~_  $ &&      \n" +
        "      &&$       ||   .  '    .   '  ;   ||       $&&      \n" +
        "      && $   ~~ ||   |  .    ,   |  .   || .    $ &&      \n" +
        "__..~~&&$       ||   .  .    `   ;  |   ||   .   $&&~~..__\n" +
        "      && $     (||   :  ,    :   :  :   ||      $ &&      \n" +
        "      &&$   .-~(||   ;  |    .   |  ;   ||~-. _~ $&&      \n" +
        "      && $      ||   |  :    |   '  .   ||   ~  $ &&      \n" +
        "      &&$ ~~_   ||   ;  `    .   `  |   ||___    $&&      \n" +
        "      && $-~  __||   ,  '    ,   :  .   ||    ~-$ &&      \n" +
        "    _.&&$ ~     ||   .  |    .   '  '   ||      .$&&._    \n" +
        "_.-~ &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ~-._\n" +
        "   _&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&_   \n" +
        " -'----------------------------------------------------`- \n" +
        "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\n"
    ];

    render() {
        let itemsList = this.asciiBackgroundRestaurant.map(function(item){
            const data = createHash('md5').update(item, 'ascii');
            return <span key={data.digest('hex')}>{item}<br/></span>;
        });
        return <pre>{ itemsList }</pre>
    }
}
