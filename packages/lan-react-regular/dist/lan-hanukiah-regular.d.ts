import React from 'react';

export interface LanHanukiahRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHanukiahRegular(props: LanHanukiahRegularProps): React.ReactElement;
export default LanHanukiahRegular;
