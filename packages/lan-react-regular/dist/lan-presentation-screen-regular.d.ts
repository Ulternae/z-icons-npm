import React from 'react';

export interface LanPresentationScreenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPresentationScreenRegular(props: LanPresentationScreenRegularProps): React.ReactElement;
export default LanPresentationScreenRegular;
