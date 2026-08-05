import React from 'react';

export interface LanLacrosseStickProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLacrosseStick(props: LanLacrosseStickProps): React.ReactElement;
export default LanLacrosseStick;
