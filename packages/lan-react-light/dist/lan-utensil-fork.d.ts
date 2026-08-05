import React from 'react';

export interface LanUtensilForkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUtensilFork(props: LanUtensilForkProps): React.ReactElement;
export default LanUtensilFork;
