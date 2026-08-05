import React from 'react';

export interface LanPresentationScreenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPresentationScreen(props: LanPresentationScreenProps): React.ReactElement;
export default LanPresentationScreen;
