import React from 'react';

export interface LanFaceTongueMoneyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceTongueMoney: React.FC<LanFaceTongueMoneyProps>;
export default LanFaceTongueMoney;
