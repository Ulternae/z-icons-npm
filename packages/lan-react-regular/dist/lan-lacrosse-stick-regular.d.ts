import React from 'react';

export interface LanLacrosseStickRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLacrosseStickRegular(props: LanLacrosseStickRegularProps): React.ReactElement;
export default LanLacrosseStickRegular;
