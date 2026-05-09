import React from 'react';

export interface MinaRecordSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRecordSolid: React.FC<MinaRecordSolidProps>;
export default MinaRecordSolid;
