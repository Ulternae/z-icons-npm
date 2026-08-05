import React from 'react';

export interface MinaSlashDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSlashDiamondSolid(props: MinaSlashDiamondSolidProps): React.ReactElement;
export default MinaSlashDiamondSolid;
