import React from 'react';

export interface LanCassetteTapeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCassetteTapeThin(props: LanCassetteTapeThinProps): React.ReactElement;
export default LanCassetteTapeThin;
