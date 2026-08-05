import React from 'react';

export interface LanYinYangProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanYinYang(props: LanYinYangProps): React.ReactElement;
export default LanYinYang;
