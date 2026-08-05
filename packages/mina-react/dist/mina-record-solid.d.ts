import React from 'react';

export interface MinaRecordSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRecordSolid(props: MinaRecordSolidProps): React.ReactElement;
export default MinaRecordSolid;
