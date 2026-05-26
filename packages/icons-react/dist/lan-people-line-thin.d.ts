import React from 'react';

export interface LanPeopleLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleLineThin: React.FC<LanPeopleLineThinProps>;
export default LanPeopleLineThin;
