import React from 'react';

export interface LanEyeDropperEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEyeDropperEmpty(props: LanEyeDropperEmptyProps): React.ReactElement;
export default LanEyeDropperEmpty;
