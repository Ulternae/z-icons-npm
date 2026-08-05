import React from 'react';

export interface LanFileThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileThin(props: LanFileThinProps): React.ReactElement;
export default LanFileThin;
