import React from 'react';

export interface BruScribdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruScribd(props: BruScribdProps): React.ReactElement;
export default BruScribd;
