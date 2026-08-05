import React from 'react';

export interface LanOwlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOwl(props: LanOwlProps): React.ReactElement;
export default LanOwl;
