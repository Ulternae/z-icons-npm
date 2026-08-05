import React from 'react';

export interface LanWhaleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWhaleThin(props: LanWhaleThinProps): React.ReactElement;
export default LanWhaleThin;
