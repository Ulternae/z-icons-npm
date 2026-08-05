import React from 'react';

export interface MinaSlashDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSlashDiamond(props: MinaSlashDiamondProps): React.ReactElement;
export default MinaSlashDiamond;
