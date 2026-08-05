import React from 'react';

export interface LanAxeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAxeThin(props: LanAxeThinProps): React.ReactElement;
export default LanAxeThin;
