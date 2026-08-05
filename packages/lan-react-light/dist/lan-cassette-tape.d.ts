import React from 'react';

export interface LanCassetteTapeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCassetteTape(props: LanCassetteTapeProps): React.ReactElement;
export default LanCassetteTape;
