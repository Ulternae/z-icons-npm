import React from 'react';

export interface LanMaskFaceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMaskFaceThin(props: LanMaskFaceThinProps): React.ReactElement;
export default LanMaskFaceThin;
