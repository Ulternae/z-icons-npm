import React from 'react';

export interface LanHanukiahProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHanukiah(props: LanHanukiahProps): React.ReactElement;
export default LanHanukiah;
