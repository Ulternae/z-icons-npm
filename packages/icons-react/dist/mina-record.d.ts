import React from 'react';

export interface MinaRecordProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRecord: React.FC<MinaRecordProps>;
export default MinaRecord;
