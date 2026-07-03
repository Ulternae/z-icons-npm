import React from 'react';

export interface BruOpenidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruOpenid(props: BruOpenidProps): React.ReactElement;
export default BruOpenid;
