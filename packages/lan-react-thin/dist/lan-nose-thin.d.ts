import React from 'react';

export interface LanNoseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNoseThin(props: LanNoseThinProps): React.ReactElement;
export default LanNoseThin;
