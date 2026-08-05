import React from 'react';

export interface LanHanukiahThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHanukiahThin(props: LanHanukiahThinProps): React.ReactElement;
export default LanHanukiahThin;
