import React from 'react';

export interface LanLacrosseStickSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLacrosseStickSolid(props: LanLacrosseStickSolidProps): React.ReactElement;
export default LanLacrosseStickSolid;
