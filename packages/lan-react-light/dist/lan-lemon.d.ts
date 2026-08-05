import React from 'react';

export interface LanLemonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLemon(props: LanLemonProps): React.ReactElement;
export default LanLemon;
