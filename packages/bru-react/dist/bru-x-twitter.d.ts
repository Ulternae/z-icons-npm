import React from 'react';

export interface BruXTwitterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruXTwitter(props: BruXTwitterProps): React.ReactElement;
export default BruXTwitter;
