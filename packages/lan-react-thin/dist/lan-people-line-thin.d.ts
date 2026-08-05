import React from 'react';

export interface LanPeopleLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleLineThin(props: LanPeopleLineThinProps): React.ReactElement;
export default LanPeopleLineThin;
