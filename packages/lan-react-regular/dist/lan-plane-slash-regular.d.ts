import React from 'react';

export interface LanPlaneSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneSlashRegular(props: LanPlaneSlashRegularProps): React.ReactElement;
export default LanPlaneSlashRegular;
