import React from 'react';

export interface BruXboxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruXbox(props: BruXboxProps): React.ReactElement;
export default BruXbox;
