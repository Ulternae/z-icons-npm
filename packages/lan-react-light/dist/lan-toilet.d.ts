import React from 'react';

export interface LanToiletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToilet(props: LanToiletProps): React.ReactElement;
export default LanToilet;
