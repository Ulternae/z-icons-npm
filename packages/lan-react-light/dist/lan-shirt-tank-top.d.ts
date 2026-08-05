import React from 'react';

export interface LanShirtTankTopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShirtTankTop(props: LanShirtTankTopProps): React.ReactElement;
export default LanShirtTankTop;
