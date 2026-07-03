import React from 'react';

export interface BruSquareVimeoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareVimeo(props: BruSquareVimeoProps): React.ReactElement;
export default BruSquareVimeo;
