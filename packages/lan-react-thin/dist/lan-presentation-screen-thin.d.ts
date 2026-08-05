import React from 'react';

export interface LanPresentationScreenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPresentationScreenThin(props: LanPresentationScreenThinProps): React.ReactElement;
export default LanPresentationScreenThin;
