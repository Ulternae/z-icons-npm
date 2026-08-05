import React from 'react';

export interface LanTextSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTextSlashSolid(props: LanTextSlashSolidProps): React.ReactElement;
export default LanTextSlashSolid;
