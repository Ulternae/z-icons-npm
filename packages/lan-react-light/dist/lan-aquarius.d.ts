import React from 'react';

export interface LanAquariusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAquarius(props: LanAquariusProps): React.ReactElement;
export default LanAquarius;
