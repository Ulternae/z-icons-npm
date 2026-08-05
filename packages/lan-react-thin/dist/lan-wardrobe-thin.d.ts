import React from 'react';

export interface LanWardrobeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWardrobeThin(props: LanWardrobeThinProps): React.ReactElement;
export default LanWardrobeThin;
