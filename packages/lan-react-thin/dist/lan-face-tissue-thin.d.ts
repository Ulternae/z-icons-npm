import React from 'react';

export interface LanFaceTissueThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceTissueThin(props: LanFaceTissueThinProps): React.ReactElement;
export default LanFaceTissueThin;
