import React from 'react';

export interface LanBoxArchiveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxArchiveThin(props: LanBoxArchiveThinProps): React.ReactElement;
export default LanBoxArchiveThin;
