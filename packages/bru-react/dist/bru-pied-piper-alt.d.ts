import React from 'react';

export interface BruPiedPiperAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPiedPiperAlt(props: BruPiedPiperAltProps): React.ReactElement;
export default BruPiedPiperAlt;
