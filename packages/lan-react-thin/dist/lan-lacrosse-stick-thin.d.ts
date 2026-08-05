import React from 'react';

export interface LanLacrosseStickThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLacrosseStickThin(props: LanLacrosseStickThinProps): React.ReactElement;
export default LanLacrosseStickThin;
