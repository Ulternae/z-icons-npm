import React from 'react';

export interface LanSheepProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSheep(props: LanSheepProps): React.ReactElement;
export default LanSheep;
