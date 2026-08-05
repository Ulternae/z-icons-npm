import React from 'react';

export interface LanHandHornsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHorns(props: LanHandHornsProps): React.ReactElement;
export default LanHandHorns;
