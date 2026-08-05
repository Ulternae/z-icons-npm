import React from 'react';

export interface LanWrenchSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWrenchSimpleThin(props: LanWrenchSimpleThinProps): React.ReactElement;
export default LanWrenchSimpleThin;
