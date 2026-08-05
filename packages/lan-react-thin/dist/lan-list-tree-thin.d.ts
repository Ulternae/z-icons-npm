import React from 'react';

export interface LanListTreeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListTreeThin(props: LanListTreeThinProps): React.ReactElement;
export default LanListTreeThin;
