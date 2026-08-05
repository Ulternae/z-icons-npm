import React from 'react';

export interface LanFaceTongueMoneyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceTongueMoney(props: LanFaceTongueMoneyProps): React.ReactElement;
export default LanFaceTongueMoney;
