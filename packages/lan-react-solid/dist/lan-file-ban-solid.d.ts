import React from 'react';

export interface LanFileBanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileBanSolid(props: LanFileBanSolidProps): React.ReactElement;
export default LanFileBanSolid;
