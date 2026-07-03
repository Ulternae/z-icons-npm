import React from 'react';

export interface BruTexProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruTex(props: BruTexProps): React.ReactElement;
export default BruTex;
