import React from 'react';

export interface BruTwitterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruTwitter(props: BruTwitterProps): React.ReactElement;
export default BruTwitter;
