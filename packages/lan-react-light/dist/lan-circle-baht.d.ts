import React from 'react';

export interface LanCircleBahtProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleBaht(props: LanCircleBahtProps): React.ReactElement;
export default LanCircleBaht;
